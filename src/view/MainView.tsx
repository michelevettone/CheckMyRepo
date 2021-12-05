import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { pushToDoneView, pushToInsertRepo, pushToInsertUser } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { checkExistingRepo, sendMessage } from '../functions';
import { useNetInfo } from '@react-native-community/netinfo';
import colors from '../../assets/colors';

export const MainView: React.FC = () => {
    const navigation: StackNavigationProp<any> = useNavigation();
    const isConnected = useNetInfo().isConnected;
    const [username, setUsername] = useState<string>('');
    const [repo, setRepo] = useState<string>('');
    const [isRepoExisting, setIsRepoExisting] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setIsRepoExisting(undefined);
    }, [username, repo]);

    const backgroundColor = useCallback(() => {
        switch (isRepoExisting) {
            case undefined:
                return colors.WHITE;
            case true:
                return colors.GREEN;
            case false:
                return colors.RED;
            default:
                return colors.WHITE;
        }
    }, [isRepoExisting]);

    const check = async () => {
        const existing = await checkExistingRepo(username, repo);
        setIsRepoExisting(existing);
    };

    const send = async () => {
        const response = await sendMessage(username, repo);
        if (response) {
            pushToDoneView(navigation);
        }
    };

    const renderButton = useCallback(() => {
        if (!isRepoExisting) {
            return (
                <TouchableOpacity onPress={() => check()} style={styles.checkButton}>
                    <Text style={styles.checkButtonLabel}>CHECK</Text>
                </TouchableOpacity>
            );
        } else if (isRepoExisting) {
            return (
                <TouchableOpacity onPress={() => send()} style={styles.checkButton}>
                    <Text style={styles.checkButtonLabel}>SEND</Text>
                </TouchableOpacity>
            );
        }
    }, [isRepoExisting, username, repo]);

    const renderErrorLabel = useCallback(() => {
        if (isRepoExisting && !isConnected) {
            return (
                <Text style={styles.errorText}>
                    Check your <Text style={{ fontWeight: 'bold' }}>internet connection</Text>
                </Text>
            );
        } else if (isRepoExisting === false) {
            return (
                <Text style={styles.errorText}>
                    Check your <Text style={{ fontWeight: 'bold' }}>username</Text> or your <Text style={{ fontWeight: 'bold' }}>repository </Text>name
                </Text>
            );
        } else {
            return <></>;
        }
    }, [isRepoExisting, isConnected]);

    return (
        <View style={[styles.mainContainer, { backgroundColor: backgroundColor() }]}>
            <View style={styles.innerContainer}>
                <View style={styles.topView}>
                    <Text style={styles.titleLabel}>Set the repository address</Text>
                </View>
                <View style={styles.middleView}>
                    <Text style={{ fontSize: 36 }}>github.com</Text>
                    <TouchableOpacity onPress={() => pushToInsertUser(navigation, username, setUsername)}>
                        <Text style={{ fontSize: 36 }}>
                            /<Text style={{ color: colors.GREY }}>{!!username ? username : 'user'}</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pushToInsertRepo(navigation, repo, setRepo)}>
                        <Text style={{ fontSize: 36 }}>
                            /<Text style={{ color: colors.GREY }}>{!!repo ? repo : 'repo'}</Text>
                        </Text>
                    </TouchableOpacity>
                    {renderErrorLabel()}
                </View>
                <View style={styles.bottomView}>{renderButton()}</View>
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
    topView: {},
    titleLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    middleView: {
        width: '100%',
        marginTop: 40,
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
    errorText: {
        fontSize: 24,
        marginTop: 16,
    },
});
