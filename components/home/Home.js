import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, constStyles } from '../../constants'
import { meetings } from '../../constants'
import { Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import Recommended from './Recommended'


const Home = ({navigation}) => {

    const renderItem =  ({item})=>(
        <TouchableOpacity style={styles.meetingItem}>
            <View style={styles.meetingContent}>
            <View style={constStyles.profileImage}>
                <Image source={item.pic} />
            </View>
            <View>
                <Text style={constStyles.miniHeader}>{item.title}</Text>
                <Text style={styles.meetingText}>{item.time}</Text>
            </View>
            </View>
            <View>
                <MaterialIcons name="navigate-next" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
  return (
    <View style={constStyles.container}>
         <FlatList
         showsVerticalScrollIndicator={false}
          data={[{ key: 'header' },  { key: 'footer' }]}
          renderItem={({ item }) =>
            item.key === 'header' ? (
                  <View>

                      <View>
                          <Text style={constStyles.headerText}> Good morning, Joan </Text>
                          <Text style={constStyles.normalText}>It’s a great day to learn something new!</Text>
                      </View>
                      <View>
                          <TextInput style={constStyles.searchBar} placeholder="Search anything ..." />
                      </View>

                      <View>
                          <Text style={constStyles.miniHeader}>Upcoming meetings</Text>
                          <FlatList
                            style={{marginVertical: 10}}
                              data={meetings}
                              showsHorizontalScrollIndicator={false}
                              renderItem={renderItem}
                              keyExtractor={item => item.id}
                          />
                      </View>

                      <Text style={constStyles.miniHeader}>Recommended mentors</Text>
                      <Recommended />
                  </View>
            ) : item.key === 'footer' ? (
              <View style={{ height: 100 }}><Text></Text></View>
            ) : null
          }
          keyExtractor={(item) => item.key}
        />
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EDEDED',
        marginTop: 50, 
    },
    meetingItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 10,
    
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: COLORS.gray,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        elevation: 10,
    },
    meetingContent:{
        flexDirection: 'row',
    },
    meetingImage:{
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: COLORS.green,
        marginRight: 10,
    },
    meetingText: {
        fontSize: 14,
        color: COLORS.gray,
        fontWeight: 400,
        width: 291,
        fontWeight: 500,
    },

})