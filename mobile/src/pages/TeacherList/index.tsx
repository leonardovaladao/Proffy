import React, { useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setIsFiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher)=>{
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    function handleToggleFilter(){
        setIsFiltersVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
        setIsFiltersVisible(false);
        setTeachers(response.data);
    };
    

    return (
        <View style={styles.container}>
            <PageHeader 
                title='Proffys disponíveis' 
                headerRight={(
                    <BorderlessButton style={styles.filterButton} onPress={handleToggleFilter}>
                        <Feather name='filter' size={20} color='#fff'></Feather>
                        <Text style={styles.filterButtonText}>Filtrar</Text>
                    </BorderlessButton>
                )} >
                {isFilterVisible && (
                <View style={styles.searchForm}>
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Selecione a matéria"
                            placeholderTextColor='#c1bccc'></TextInput>
                            
                            <View style={styles.inputGroup}>
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}
                                        placeholder="Selecione Dia da semana"
                                        placeholderTextColor='#c1bccc'></TextInput>
                                </View>
                                
                                <View style={styles.inputBlock}>
                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder="Selecione horário"
                                        placeholderTextColor='#c1bccc'></TextInput>
                                </View>
                            </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.submitButtonText}>
                            Pesquisar
                        </Text>
                    </RectButton>
                </View>
                
                )}
                
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                {teachers.map((teacher: Teacher) => { 
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                            ></TeacherItem>
                    )
                })}
            </ScrollView>
            
        </View>

        )
}

export default TeacherList;