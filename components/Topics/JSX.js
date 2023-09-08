import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const JSX = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <ScrollView>
                <Heading content={'What is JSX in Reactjs'} />
                <Subheading
                    content={[
                        'Embedding HTML in JavaScript: JSX allows you to embed HTML-like code directly into your JavaScript files. This code represents the structure of the UI elements you want to render.',
                        ' In React, UIs are built by composing components. JSX is commonly used to define the structure of these components, which can be reused throughout your application.',
                        'You can embed JavaScript expressions within curly braces {} inside JSX elements. This allows you to dynamically compute and display values based on variables or data.',
                        'JSX allows you to use HTML attributes like class and id, but you need to use the JavaScript equivalents: className and id.',
                        'Self-Closing Tags: JSX supports self-closing tags, just like in HTML.',
                        'JSX allows you to nest elements within other elements, creating a hierarchy of UI components.',
                        'JSX code cannot be executed directly by browsers, so it needs to be transpiled to standard JavaScript using a tool like Babel before it can be used in a web application.',
                        'You can add comments within JSX by wrapping them in curly braces and starting with /*',
                        'JSX makes it easier for developers to create and visualize the UI structure of React components. It allows for a more declarative and expressive way to define how components should look and behave. Under the hood, React uses JSX to create a virtual representation of the DOM elements, which it efficiently updates when data changes, helping to create dynamic and responsive user interfaces.',
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default JSX;
