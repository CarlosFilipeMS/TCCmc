import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/firebase-config'; // Atualize o caminho conforme necessário

export function Mainscreen() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Curso'));
                const data = querySnapshot.docs.map(doc => doc.data());
                setCourses(data);
            } catch (err) {
                setError(`Error fetching courses: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.logoDiv}>
                    <Text style={styles.logo}>NanoK</Text>
                </View>
                <ScrollView style={styles.cursoDiv}>
                    {error ? (
                        <Text style={styles.errorText}>{error}</Text>
                    ) : courses.length > 0 ? (
                        courses.map((course, index) => (
                            <Card key={index} style={styles.card}>
                                <Card.Content style={styles.content}>
                                    <Text style={styles.name}>{course.name}</Text>
                                    <View style={styles.resumeContainer}>
                                        <Text style={styles.resume}>{course.resume}</Text>
                                    </View>
                                </Card.Content>
                            </Card>
                        ))
                    ) : (
                        <Text>No courses available</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        backgroundColor: 'green',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '80%',
        alignItems: 'center',
    },
    logoDiv: {
        backgroundColor: 'red',
        width: '70%',
        height: 100,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    cursoDiv: {
        width: '90%',
        marginTop: 80,
    },
    card: {
        backgroundColor: 'green',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        height: 110,
    },
    content: {
        padding: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        color: '#fff', // Adicionando cor para melhor visibilidade
    },
    resumeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resume: {
        color: '#fff',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
