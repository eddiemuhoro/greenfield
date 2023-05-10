import { View, TextInput, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';
import React, { useState } from 'react'
import { COLORS, constStyles, meetings, popular } from '../../constants'
import Recommended from '../home/Recommended'
import { Image } from 'react-native'
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';


const Explore = () => {
    const [filter, setFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const languages = [
        { id: '1', name: 'English' },
        { id: '2', name: 'Spanish' },
        { id: '3', name: 'French' },
        // Add more languages as needed
    ];

    const applyFilter = () => {
        // Apply the filter logic here
    };

    const toggleLanguage = (languageId) => {
        const updatedLanguages = selectedLanguages.includes(languageId)
            ? selectedLanguages.filter((id) => id !== languageId)
            : [...selectedLanguages, languageId];

        setSelectedLanguages(updatedLanguages);
    };

    const removeFilter = (languageId)=> {
        const updatedLanguages = selectedLanguages.filter((id) => id !== languageId);
        setSelectedLanguages(updatedLanguages);
    }

    const renderLanguageItem = ({ item }) => (
        <TouchableOpacity
            style={styles.languageItem}
            onPress={() => toggleLanguage(item.id)}
        >
            <Text style={styles.languageText}>{item.name}</Text>
         
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.meetingItem}>
            <View style={styles.meetingContent}>
                <View style={constStyles.profileImage}>
                    <Image source={item.pic} />
                </View>
                <View>
                    <Text style={constStyles.miniHeader}>{item.name}</Text>
                    <Text style={styles.meetingText}>{item.title}</Text>
                </View>
            </View>
            <View>
            <MaterialIcons  name="favorite" size={24} color={COLORS.green} />

            </View>
        </TouchableOpacity>
    )


    
    return (
        <View style={constStyles.container}>
            <View>
                <View>
                    <Text style={constStyles.headerText}> Explore mentors </Text>
                    <Text style={constStyles.normalText}>There are over 3912 mentors on Prener!!</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <TextInput
                            style={[constStyles.searchBar, { width: '90%', marginRight: 10, marginBottom: 10 }]}
                            placeholder="Search anything ..."
                            value={filter}
                            onChangeText={setFilter}
                        />
                        <TouchableOpacity
                            onPress={(e) => setShowModal(true)}
                        >
                            <Ionicons name="filter" size={24} color={COLORS.green} />
                        </TouchableOpacity>
                    </View>

                    {selectedLanguages.length > 0 && (
                        <View style={styles.selectedFiltersContainer}>
                            {selectedLanguages.map((languageId) => {
                                const language = languages.find((lang) => lang.id === languageId);
                                return (
                                    <View style={styles.selectedFilter} key={language.id}>
                                        <Text style={styles.selectedFilterText}>{language.name}</Text>
                                        <Entypo name="cross" size={17} color="white" 
                                            onPress = {()=> removeFilter(language.id)}
                                         />
                                    </View>
                                );
                            })}
                        </View>
                    )}
                </View>

                <Modal
                    visible={showModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Select Languages</Text>
                            <FlatList
                                data={languages}
                                renderItem={renderLanguageItem}
                                keyExtractor={(item) => item.id}
                            />
                            <TouchableOpacity
                                style={styles.applyButton}
                                onPress={() => {
                                    setShowModal(false);
                                    applyFilter();
                                  
                                }}
                            >
                                <Text style={styles.applyButtonText}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            </View>

            <View>
                <Text style={constStyles.miniHeader}>Highest rated mentors</Text>
                <Recommended />
            </View>

            <View>
                <Text style={constStyles.miniHeader}>Popular mentors</Text>
                <FlatList
                    style={{ marginVertical: 0 }}
                    data={popular}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        marginTop: 50,
    },
    meetingItem: {
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
    meetingContent: {
        flexDirection: 'row',
    },
    meetingImage: {
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
    filterIcon: {
        padding: 8,
        backgroundColor: '#ccc',
        borderRadius: 5,
      },
      selectedFiltersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
      },
      selectedFilter: {
        backgroundColor: COLORS.green,
        padding: 5,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      selectedFilterText: {
        color: 'white',
        fontSize:14,
        marginRight: 5,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      languageText: {
        marginRight: 10,
      },
      applyButton: {
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      applyButtonText: {
        fontWeight: 'bold',
      },

})