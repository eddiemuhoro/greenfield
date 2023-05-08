import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, constStyles } from '../../constants'
import { meetings } from '../../constants'


const Home = ({navigation}) => {

    const renderItem =  ({item})=>(
        <TouchableOpacity style={styles.meetingItem}>
            <View style={styles.meetingContent}>
            <View style={styles.meetingImage}>

            </View>
            <View>
                <Text style={constStyles.miniHeader}>{item.title}</Text>
                <Text style={styles.meetingText}>{item.time}</Text>
            </View>
            </View>
            <View>
                <Text>k</Text>
            </View>
        </TouchableOpacity>
    )
  return (
    <View style={constStyles.container}>

     <View>
        <Text style={constStyles.headerText}> Good morning, Michael </Text>
        <Text style={constStyles.normalText}>It’s a great day to learn something new!</Text>
     </View>
     <View>
        <TextInput style={constStyles.searchBar} placeholder="Search anything ..." />
     </View>

     <View>
        <Text style={constStyles.miniHeader}>Upcoming meeting</Text>
        <FlatList
            data={meetings}
            showsHorizontalScrollIndicator={false}
           
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
     </View>
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