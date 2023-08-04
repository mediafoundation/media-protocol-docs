import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { components } from './mdx-components';
import { useThemeConfig } from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './mdx.module.css';

export const MDX: React.FC<{
    children: string;
    className?: string;
}> = ({ children, className = '' }) => {
    const { prism } = useThemeConfig();

    const componentsMap = {
        ...components,
    };

    const preToCodeBlockHandler = (preProps) => {
        if (
            preProps?.children?.props?.mdxType === 'code' &&
            preProps?.children?.props
        ) {
            const { children: codeString, className, ...props } =
                preProps.children.props;

            const matches = className.match(/language-(?<lang>.*)/);

            return {
                codeString: codeString.trim(),
                className: matches && matches.groups && matches.groups.lang,
                ...props,
            };
        }
    };

    const transformCodeBlockHandler = (props) => {
        const newProps = preToCodeBlock(props);
        if (newProps) {
            if (prism.theme) {
                newProps.theme = prism.theme;
            }
            if (prism.defaultLanguage) {
                newProps.defaultLanguage = prism.defaultLanguage;
            }
            return newProps;
        }
        return props;
    };

    return (
        <MDXProvider
            components={componentsMap}
            {...{ preToCodeBlock: preToCodeBlockHandler }}
        >
            <div className={clsx(styles.mdxContainer, className)}>
                {React.Children.map(children, (child) => {
                    if (
                        React.isValidElement(child) &&
                        child.type.toString() === 'Symbol(react.fragment)'
                    ) {
                        return React.Children.toArray(child.props.children).map(
                            (item, i) => (
                                <div
                                    key={i}
                                    {...transformCodeBlockHandler(item.props)}
                                    className={clsx(item.props.className, styles.codeBlock)}
                                />
                            ),
                        );
                    }
                    return <>{child}</>;
                })}
            </div>
        </MDXProvider>
    );
};
