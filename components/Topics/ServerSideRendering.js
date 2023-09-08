import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const ServerSideRendering = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <ScrollView>
                <Heading content={'What is Server Side Rendering'} />
                <Subheading
                    content={[
                        'When a user first visits a SPA, the web server typically sends a minimal HTML, CSS, and JavaScript bundle. This initial page load is often referred to as the "shell" of the application.',
                        'After the initial load, SPAs interact with the server through APIs (often using AJAX or Fetch requests) to retrieve data in the background. They then use JavaScript to dynamically update the content of the page without reloading it. This creates a smoother and more responsive user experience.',
                        'SPAs often implement client-side routing, which means that the URL in the browser`s address bar can change as the user navigates within the application. The routing is typically handled by JavaScript, and different components or views are rendered based on the URL.',
                        'SPAs rely heavily on client-side state management. Libraries like React provide mechanisms for managing and updating application state, which can be used to drive the rendering of components and views.',
                        'SPAs can provide a more app-like experience with fast, seamless transitions between views, as they don`t need to request a new HTML page from the server for each interaction.',
                        'SPAs are well-suited for applications that require a high degree of interactivity and real-time updates, such as social media platforms, dashboards, and web-based productivity tools.',
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default ServerSideRendering;
