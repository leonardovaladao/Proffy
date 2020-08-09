import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

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
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds)
            }
        })
    }

    function handleToggleFilter() {
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


                            <Text style={styles.label}>Selecione a matéria:</Text>

                            <View style={styles.viewBorder}>
                                <Picker
                                    style={styles.inputSelect}
                                    selectedValue={subject}
                                    onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
                                >
                                    <Picker.Item label="Artes" value='Artes' />
                                    <Picker.Item label="Biologia" value='Biologia' />
                                    <Picker.Item label="Filofia" value='Filosofia' />
                                    <Picker.Item label="Física" value='Física' />
                                    <Picker.Item label="Geografia" value='Geografia' />
                                    <Picker.Item label="Inglês" value='Inglês' />
                                    <Picker.Item label="História" value='História' />
                                    <Picker.Item label="Matemática" value='Matemática' />
                                    <Picker.Item label="Português" value='Português' />
                                    <Picker.Item label="Química" value='Química' />
                                    <Picker.Item label="Sociologia" value='Sociologia' />
                                </Picker>
                            </View>

                            <Text style={styles.label}>Selecione o dia da semana e horário:</Text>
                            <View style={styles.inputGroup}>
                                <View style={styles.viewBorder}>
                                    
                                    <Picker
                                        style={styles.inputSelect}
                                        selectedValue={week_day}
                                        onValueChange={(itemValue, itemIndex) => setWeekDay(itemValue)}
                                    >
                                        <Picker.Item label="Domingo" value='0' />
                                        <Picker.Item label="Segunda-feira" value='1' />
                                        <Picker.Item label="Terça-feira" value='2' />
                                        <Picker.Item label="Quarta-feira" value='3' />
                                        <Picker.Item label="Quinta-feira" value='4' />
                                        <Picker.Item label="Sexta-feira" value='5' />
                                        <Picker.Item label="Sábado" value='6' />
                                    </Picker>
                                </View>

                                
                                <View style={styles.viewBorder}>
                                    <Picker
                                        style={styles.inputSelect}
                                        selectedValue={time}
                                        onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                                    >
                                        <Picker.Item label="08:00" value='08:00' />
                                        <Picker.Item label="09:00" value='09:00' />
                                        <Picker.Item label="10:00" value='10:00' />
                                        <Picker.Item label="11:00" value='11:00' />
                                        <Picker.Item label="12:00" value='12:00' />
                                        <Picker.Item label="13:00" value='13:00' />
                                        <Picker.Item label="14:00" value='14:00' />
                                        <Picker.Item label="15:00" value='15:00' />
                                        <Picker.Item label="16:00" value='16:00' />
                                        <Picker.Item label="17:00" value='17:00' />
                                        <Picker.Item label="18:00" value='18:00' />
                                    </Picker>
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