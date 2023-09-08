import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const ReactAdvantages = () => {
    return (
        <View>
            <View
                style={{
                    padding: 8,
                }}
            >
                <ScrollView>
                    <Heading content={'Advantages of Using Reactjs'} />
                    <Subheading
                        content={[
                            'React allows you to describe how your UI should look at any given point in time, and it automatically updates and renders the components when data changes. This makes it easier to understand and reason about your code.',
                            ' React promotes the creation of reusable UI components. These components encapsulate their own logic and state, making it easier to maintain and scale your application.',
                            'React uses a virtual DOM to efficiently update the actual DOM. Instead of updating the entire DOM when there`s a change, React calculates the minimal number of updates needed, which leads to better performance.',
                            'React enforces a unidirectional data flow, making it easier to track and debug data changes. This helps prevent unexpected side effects and makes your code more predictable.',
                            'React supports server-side rendering, which can improve SEO and initial load times for your web applications.',
                            'React can be used to build mobile applications through React Native. This allows you to share a significant portion of your codebase between web and mobile applications, reducing development time and effort.',
                            'React has extensive documentation, tutorials, and a vast online community. Finding solutions to common problems and learning resources is relatively easy.',
                            'React`s efficient rendering process and use of a virtual DOM contribute to good performance in web applications.',
                            ' React offers a set of developer tools (React DevTools) that can be added to browsers, providing a powerful debugging and inspection experience.',
                        ]}
                    />
                </ScrollView>
            </View>
        </View>
    );
};

export default ReactAdvantages;
