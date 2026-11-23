import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Example this days</Text>
      <Link href="/hello" style={styles.link}>1. Hello Native</Link>
      <Link href="/counter" style={styles.link}>2. Counter</Link>
      <Link href="/greet" style={styles.link}>3. Greet Textinput</Link>
      <Link href="/student" style={styles.link}>4. student List</Link>
      <Link href="/studentapi" style={styles.link}>4. student จาก API</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBlock: 4,
  },
  link: {
    backgroundColor: "#2563eb",
    color: "#fff",
    fontSize: 18,
    padding: 16,
    borderRadius: 12,
  }
})