import { StyleSheet } from "react-native"

//colors
export const  COLORS = {
    button: '#3DD598',
    white: '#fff',
    green : '#3DD598',
    gray : '#96A7AF',
 
}

//container styles
export const  constStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#EDEDED',
        padding: 15,
    },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
        marginBottom: -10,
    },
    miniHeader: {
        fontSize: 16,
        fontWeight:500,
        color: COLORS.black,
    },
    normalText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#96A7AF',
        marginTop: 20,
        fontWeight: 400,
        width: 291,
    },
    searchBar:{
        backgroundColor: COLORS.white,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10,
        fontSize: 15,

    },
    mentorRectangles:{
        width: 230,
        height: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
    },
    profileImage:{
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: COLORS.green,
        marginRight: 10,
    },
    rectangleText: {
        fontSize: 14,
        color: COLORS.gray,
        fontWeight: 400,
        width: 291,
        fontWeight: 500,
    },
})

const profile1 = require('./assets/profiles/profile1.png')
const profile2 = require('./assets/profiles/profile2.png')
const profile3 = require('./assets/profiles/profile3.png')

export const meetings =[
    {
        id: 1,
        title: 'Health chat with Lidia',
        time: 'Today at 9:00 AM - 30 mins',
        pic: profile1,

    },
    {
        id: 2,
        title: 'Mentoring with Tom',
        time: 'Today at 9:00 AM - 30 mins',
        pic: profile2,
    },
    {
        id: 3,
        title: 'Learn Programming with Notail',
        time: 'Today at 9:00 AM - 30 mins',
        pic: profile3,
    },
    
]

export const mentors = [
    {
        id: 1,
        name: 'Anna Tchaiko',
        title: 'Health Coach',
        pic: profile1,
    },
    {
        id: 2,
        name: 'Mark Thomson',
        title: 'Health Coach',
        pic: profile2,
    },
]