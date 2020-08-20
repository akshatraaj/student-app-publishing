import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import db from '../config';
import Table from '../components/Table';
var present;
var absent;
var today;

export default class ListScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressedList: [],
      absentPressedList: [],
    };
  }

  componentDidMount = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      // class_ref.on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    today = date + '-' + month + '-' + year;
    return today;
  };

  goToSummary = () => {
    this.props.navigation.navigate('SortedScreen');
  };
  render() {
    return (
      <ScrollView>
        <View>
          <Header />
          <Table />
          <View style={styles.grid}>
            <Text style={styles.name}>1            Akshat Raaj</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  Name: 'Akshat Raaj',
                  Roll_No: 1,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  Name: 'Akshat Raaj',
                  Roll_No: 1,
                }),
                  { disabled: true };
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2   Abhyuday Anand</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  Name: 'Abhyuday Anand',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  Name: 'Abhyuday Anand',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3                      Aryan</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  Name: 'Aryan',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  Name: 'Aryan',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4                Amrit Raj</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  Name: 'Amrit Raj',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  Name: 'Amrit Raj',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>5     Abhijeet Kumar</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Present',
                  Name: 'Abhijeet Kumar',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Absent',
                  Name: 'Abhijeet Kumar',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>6          Adarsh Mani</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Present',
                  Name: 'Adarsh Mani',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Absent',
                  Name: 'Adarsh Mani',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>7           Ayush Arpit</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Present',
                  Name: 'Ayush Arpit',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Absent',
                  Name: 'Ayush Arpit',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>8             Aditya Raj</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Present',
                  Name: 'Aditya Raj',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Absent',
                  Name: 'Aditya Raj',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>9              Arfa Iqbal</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Present',
                  Name: 'Arfa Iqbal',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Absent',
                  Name: 'Arfa Iqbal',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>10     Ameya Raj</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Present',
                  Name: 'Ameya Raj',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Absent',
                  Name: 'Ameya Raj',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttons1} onPress={this.goToSummary}>
            <Text style={styles.text1}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    color: 'green',
    borderWidth: 2,
    borderRadius: 15,
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
