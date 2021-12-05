import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const AllDoneView: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.topView}>
                    <Text style={styles.label}>All done!</Text>
                    <Text style={styles.label}>Repository sent.</Text>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={styles.checkButton}
                    >
                        <Text style={styles.checkButtonLabel}>COOL</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        marginTop: 60,
        marginBottom: 30,
        marginHorizontal: 40,
    },
    topView: {
        marginTop: 60,
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    bottomView: {
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    checkButton: {
        alignSelf: 'flex-end',
    },
    checkButtonLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
});
