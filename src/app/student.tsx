import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const student = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student List FlatlList</Text>
      <Text style={styles.subtitle}>My First App</Text>
    </View>
  )
}

export default student

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2563eb",
    },
    subtitle: {
        fontSize: 18,
        color: "#475569",
        marginTop: 8,
    },
})