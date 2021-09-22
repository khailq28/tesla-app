import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },

    icon: {
        color: "white",
    },

    menuTextBox: {
        flexGrow: 1,
    },

    menuText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase",
    },

    arrowIcon: {
        color: "#4D4D4E",
    },

    subTitle: {
        color: "gray",
        fontSize: 14,
        marginLeft: 15,
    },
});

export default styles;
