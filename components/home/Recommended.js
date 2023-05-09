import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { constStyles } from '../../constants'
import { mentors } from '../../constants'

const Recommended = () => {

  const renderItem= ({item})=> (
    <TouchableOpacity style={constStyles.mentorRectangles}>
      <View>
        <View style={[constStyles.profileImage, {marginBottom:22}]}>
          <Image source={item.pic} />
        </View>
        <View>
          <Text style={constStyles.miniHeader}>{item.name}</Text>
          <Text style={constStyles.rectangleText}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
    
  return (
    <View>
             <Text style={constStyles.miniHeader}>Recommended mentors</Text>
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