import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const Virtualdom = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <ScrollView>
                <Heading content={'What is Virtual DOM'} />
                <Subheading
                    content={[
                        'React introduces the concept of a Virtual DOM, which is a lightweight, in-memory representation of the actual DOM. It`s essentially a tree structure that mirrors the structure of the real DOM but contains only the necessary information about elements, their properties, and content.',
                        'When data changes in a React application (e.g., a user interacts with the interface or new data is fetched from an API), a process called "reconciliation" begins. React calculates the difference between the current Virtual DOM and the previous one (generated from the last state or props). This difference is determined by comparing the two Virtual DOM trees, which is much faster than directly comparing the real DOM elements.',
                        'React identifies the minimal number of changes needed to update the real DOM to match the desired state. By working with the Virtual DOM, React reduces the number of expensive DOM operations required, resulting in better performance.',
                        'React often batches multiple updates together for efficiency. This means that even if multiple changes are made to the application state in quick succession, React can optimize and update the real DOM only once.',
                        'When React identifies the differences in the Virtual DOM, it selectively re-renders only the components that are affected by the data changes. This avoids unnecessary re-rendering of the entire UI.',
                        'React uses "keys" to help it efficiently update lists of elements. Keys are unique identifiers assigned to each element in a list, and they allow React to know which elements have changed, been added, or been removed in a list.',
                        'The Virtual DOM significantly improves the performance of React applications because it minimizes the manipulation of the real DOM, which can be a slow and resource-intensive process.',
                        'In summary, the Virtual DOM in React acts as an intermediary between the application`s data and the actual DOM, allowing React to optimize updates and render changes efficiently. It`s a critical part of what makes React fast and responsive in building dynamic user interfaces. When you work with React, you typically interact with the Virtual DOM indirectly through React`s component and rendering system.',
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default Virtualdom;
