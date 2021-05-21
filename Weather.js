import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#BA8B02", "#181818"],
        title: "Thunderstorm",
        subtitle: "When thunder roars⚡, go indoors. Find a safe, enclosed shelter."
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#355C7D", "#6C5B7B", "#C06C84"],
        title: "Drizzle",
        subtitle: "Take an umbrella, it's raining☔"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#74ebd5", "#ACB6E5"],
        title: "Rain",
        subtitle: "Take an umbrella, it's raining☔"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title: "Snow",
        subtitle: "It's snowing outside☃. It's not always good, but I hope it's good."
    },
    Atmosphere: {
        iconName: "earth",
        gradient: ["#F0C27B", "#4B1248"],
        title: "Atmosphere",
        subtitle: "It's just atmosphere"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Mist",
        subtitle: "I don't recommend driving. If you are driving, Slow down and Turn on your headlights."
    },
    Smoke: {
        iconName: "smog",
        gradient: ["#c94b4b", "#4b134f"],
        title: "Smoke",
        subtitle: "Don't go outside! Don't even open the window!"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Haze",
        subtitle: "I don't recommend driving."
    },
    Dust: {
        iconName: "broom",
        gradient: ["#334d50", "#cbcaa5"],
        title: "Dust",
        subtitle: "😷Mask REQUIRED!!!😷"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Fog",
        subtitle: "I don't recommend driving."
    },
    Sand: {
        iconName: "cactus",
        gradient: ["#fffbd5", "#b20a2c"],
        title: "Sand",
        subtitle: "😷Mask REQUIRED!!!😷"
    },
    Ash: {
        iconName: "triangle",
        gradient: ["#0F2027", "#203A43", "#2C5364"],
        title: "Ash",
        subtitle: "🌋Watch out for ash!!🌋"
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#136a8a", "#267871"],
        title: "Squall",
        subtitle: "Check the weather forecast carefully"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#de6161", "#2657eb"],
        title: "Tornado",
        subtitle: "🌪Evacuate to Shelter!🌪"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#f8b500", "#fceabb"],
        title: "Clear",
        subtitle: "☀Enjoy your day☀"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#a8c0ff", "#3f2b96"],
        title: "Clouds",
        subtitle: "☁It's a little cloudy☁"
    }
}

export default function Weather({temp, condition, location}) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <FontAwesome name="location-arrow" size={28} color="white" />
                <Text style={styles.location}>{location}</Text>
            </View>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={96} 
                    color="white" 
                />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired,
    location: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    location: {
        fontSize: 28,
        paddingHorizontal: 10,
        color: "white",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "300",
        fontSize: 44,
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})