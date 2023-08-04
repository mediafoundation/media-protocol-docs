import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chartjs-adapter-moment';
import {
    LineController,
    PointElement,
    LineElement,
    TimeScale,
    LinearScale,
} from 'chart.js';

Chart.register(
    LineController,
    PointElement,
    LineElement,
    TimeScale,
    LinearScale
);

const MediaNetwork = () => {
    const [data, setData] = useState(null);
    const [priceHistory, setPriceHistory] = useState({ '7d': [], '14d': [], '30d': [] });
    const circulatingSupply = 650000;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/media-network');
            setData(response.data);

            const history7d = await axios.get('https://api.coingecko.com/api/v3/coins/media-network/market_chart', {
                params: { vs_currency: 'usd', days: '7', interval: 'daily' },
            });
            const history14d = await axios.get('https://api.coingecko.com/api/v3/coins/media-network/market_chart', {
                params: { vs_currency: 'usd', days: '14', interval: 'daily' },
            });
            const history30d = await axios.get('https://api.coingecko.com/api/v3/coins/media-network/market_chart', {
                params: { vs_currency: 'usd', days: '30', interval: 'daily' },
            });

            setPriceHistory({
                '7d': history7d.data.prices,
                '14d': history14d.data.prices,
                '30d': history30d.data.prices,
            });
        };

        fetchData();
    }, []);

    const createChartData = (priceData) => {
        const labels = priceData.map((item) => new Date(item[0]).toLocaleDateString());
        const data = priceData.map((item) => item[1]);

        return {
            labels,
            datasets: [
                {
                    label: 'Price (USD)',
                    data,
                    fill: false,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1,
                },
            ],
        };
    };

    const createChartOptions = () => ({
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
            },
            y: {
                type: 'linear',
                beginAtZero: true,
            },
        },
    });

    if (!data) {
        return <div>Loading...</div>;
    }

    const marketCap = data.market_data.current_price.usd * circulatingSupply;

    const exchangeData = data.tickers.map((ticker) => ({
        exchange: ticker.market.name,
        price: ticker.last,
        volume: ticker.volume,
    }));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
            <img src={data.image.small} alt={`${data.name} logo`} style={{ marginBottom: '1rem' }} />
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                {data.name} ({data.symbol.toUpperCase()})
            </h1>

            <div style={{
                display: 'flex', justifyContent: 'space-between',
                width: '100%', marginBottom: '0.5rem'
            }}>
                <span style={{ fontWeight: 'bold' }}>Current price:</span>
                <span>${data.market_data.current_price.usd.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>Market cap:</span>
                <span>${marketCap.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>Total volume:</span>
                <span>${data.market_data.total_volume.usd.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>24h price change:</span>
                <span>{data.market_data.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>Circulating supply:</span>
                <span>{circulatingSupply.toLocaleString()}</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Price History</h2>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>7-day Price History</h3>
                <Line data={createChartData(priceHistory['7d'])} options={createChartOptions()} />
            </div>
            <div style={{ width: '100%', marginBottom: '1rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>14-day Price History</h3>
                <Line data={createChartData(priceHistory['14d'])} options={createChartOptions()} />
            </div>
            <div style={{ width: '100%' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>30-day Price History</h3>
                <Line data={createChartData(priceHistory['30d'])} options={createChartOptions()} />
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>Exchange Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '1rem' }}>
                {exchangeData.map((exchange) => (
                    <div key={exchange.exchange} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 'bold' }}>{exchange.exchange}:</span>
                        <span>Price: ${exchange.price.toFixed(2)} | Volume: ${exchange.volume.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MediaNetwork;