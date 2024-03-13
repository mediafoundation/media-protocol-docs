import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, PointElement, LineElement, TimeScale, LinearScale } from 'chart.js';
import 'chartjs-adapter-moment';

ChartJS.register(LineController, PointElement, LineElement, TimeScale, LinearScale);

const MediaNetwork = () => {
    const [data, setData] = useState(null);
    const [priceHistory, setPriceHistory] = useState({ '7d': [], '14d': [], '30d': [] });
    const circulatingSupply = 656000;
    const maxSupply = 10000000;
    // Updated with new contract addresses and their links
    const solanaContractAddress = "ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs";
    const solanaContractLink = "https://solscan.io/token/ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs";
    const ethereumContractAddress1 = "0xc7f3ec6e0259ce1e2beabac42e2f0478ca8d74e1";
    const ethereumContractLink1 = "https://etherscan.io/token/0xc7f3ec6e0259ce1e2beabac42e2f0478ca8d74e1";
    const baseContractAddress = "0x6e51b3a19f114013e5dc09d0477a536c7e4e0207";
    const baseContractLink = "https://basescan.org/token/0x6e51b3a19f114013e5dc09d0477a536c7e4e0207";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/media-network');
                setData(response.data);

                const periods = ['7', '14', '30'];
                for (const period of periods) {
                    const historyResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/media-network/market_chart`, {
                        params: { vs_currency: 'usd', days: period, interval: 'daily' },
                    });
                    setPriceHistory(prev => ({ ...prev, [`${period}d`]: historyResponse.data.prices }));
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const createChartData = (priceData) => ({
        labels: priceData.map(item => new Date(item[0]).toLocaleDateString()),
        datasets: [{
            label: 'Price (USD)',
            data: priceData.map(item => item[1]),
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1,
        }],
    });

    const createChartOptions = () => ({
        scales: {
            x: { type: 'time', time: { unit: 'day' } },
            y: { type: 'linear', beginAtZero: true },
        },
    });

    if (!data) return <div>Loading...</div>;

    const marketCap = data.market_data.current_price.usd * circulatingSupply;

/*     const exchangeData = data.tickers?.map(ticker => ({
        exchange: ticker.market.name,
        price: ticker.last,
        volume: ticker.volume
    })); */

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src="/img/media-token.svg" alt={`${data.name} logo`} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                <h1>Media Token ({data.symbol.toUpperCase()})</h1>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <Statistic label="Current Price" value={`$${data.market_data.current_price.usd.toFixed(2)}`} />
                <Statistic label="Market Cap" value={`$${marketCap.toLocaleString()}`} />
                <Statistic label="Total Volume" value={`$${data.market_data.total_volume.usd.toLocaleString()}`} />
                <Statistic label="24h Price Change" value={`${data.market_data.price_change_percentage_24h.toFixed(2)}%`} />
                <Statistic label="Circulating Supply" value={circulatingSupply.toLocaleString()} />
                <Statistic label="Max Supply" value={maxSupply.toLocaleString()} />
                <Statistic label="Solana Contract Address" value={solanaContractAddress} link={solanaContractLink} />
                <Statistic label="Ethereum Contract Address" value={ethereumContractAddress1} link={ethereumContractLink1} />
                <Statistic label="Base Contract Address" value={baseContractAddress} link={baseContractLink} />
            </div>

            <div style={{ textAlign: 'Left', marginTop: '30px' }}>
                <a href="https://www.coingecko.com/en/coins/media-network" target="_blank" rel="noopener noreferrer">View on CoinGecko</a>
                <br />
                <a href="https://coinmarketcap.com/currencies/media-network/" target="_blank" rel="noopener noreferrer">View on CoinMarketCap</a>
            </div>

            {[/* '7d', '14d',  */'30d'].map(period => (
                <div key={period} style={{ marginBottom: '30px' }}>
                    <h2 style={{ textAlign: 'center' }}>{period} Price History</h2>
                    <Line data={createChartData(priceHistory[period])} options={createChartOptions()} />
                </div>
            ))}


        </div>
    );
};

const Statistic = ({ label, value, link }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', border: '1px solid #eee', padding: '10px', borderRadius: '5px' }}>
        <span>{label}</span>
        {link ? <a href={link} target="_blank" rel="noopener noreferrer">{value}</a> : <span>{value}</span>}
    </div>
);

export default MediaNetwork;
