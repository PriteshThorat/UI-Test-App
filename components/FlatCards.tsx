import { StyleSheet, Text, View } from "react-native"

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
              <View style={[styles.card, styles.cardOne]}>
                  <Text>Red</Text>
              </View>
              <View style={[styles.card, styles.cardTwo]}>
                  <Text>Green</Text>
              </View>
              <View style={[styles.card, styles.cardThree]}>
                  <Text>Blue</Text>
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  headingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4
  },
  cardOne: {
    backgroundColor: '#ff0000'
  },
  cardTwo: {
    backgroundColor: '#008000'
  },
  cardThree: {
    backgroundColor: '#0000ff'
  }
})

export default FlatCards