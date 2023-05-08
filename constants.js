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

    }
})

export const meetings =[
    {
        id: 1,
        title: 'Design meeting',
        time: 'Today at 9:00 AM - 30 mins',
    },
    {
        id: 2,
        title: 'Design meeting',
        time: 'Today at 9:00 AM - 30 mins',
    },
    {
        id: 3,
        title: 'Design meeting',
        time: 'Today at 9:00 AM - 30 mins',
    },
    
]