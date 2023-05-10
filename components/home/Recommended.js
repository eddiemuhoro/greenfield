import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, constStyles } from '../../constants'
import { mentors } from '../../constants'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Recommended = () => {

  const renderItem= ({item})=> (
    <TouchableOpacity style={constStyles.mentorRectangles}>
      <View>
        <View style={[constStyles.profileImage, {marginBottom:10}]}>
          <Image source={item.pic} />
        </View>
        <View>
          <Text style={constStyles.miniHeader}>{item.name}</Text>
          <Text style={constStyles.rectangleText}>{item.title}</Text>
        </View>
        <MaterialIcons style={{position:'absolute', top:0, right:0}} name="favorite" size={24} color={COLORS.green} />
        <View style={{flexDirection:'row', alignItems:"center", position:'absolute', bottom:0, right:0}}>
          <Text style={{marginRight:5}}>4.5</Text>
          <FontAwesome name="star" size={16} color='#FFC542'/>
        </View>
      </View>
    </TouchableOpacity>
  )
    
  return (
    <View>
             <FlatList
                  data={mentors}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  />

    </View>
  )
}

export default Recommended

const styles = StyleSheet.create({

})