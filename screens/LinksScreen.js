import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{...styles.content, backgroundColor: 'powderblue'}}>
          <Text style={styles.text}>One</Text>
        </View>
        <View style={{...styles.content, backgroundColor: 'steelblue'}}>
          <Text style={styles.text}>Two</Text>
        </View>
        <View style={{...styles.content, backgroundColor: 'skyblue'}}>
          <Text style={styles.text}>Three</Text>
        </View>
        <View style={{...styles.content, backgroundColor: 'lightgray'}}>
          <Text style={styles.text}>Four</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingTop: 80,
    paddingBottom: 80,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});
