import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { pushToDoneView, pushToInsertRepo, pushToInsertUser } from '../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { checkExistingRepo, sendMessage } from '../functions';
import colors from '../../assets/colors';
import font from '../../assets/fonts/font';

export const MainView: React.FC = () => {
    const navigation: StackNavigationProp<any> = useNavigation();
    const [connectionStatus, setConnectionStatus] = useState<boolean | undefined>(undefined);
    const [username, setUsername] = useState<string>('');
    const [repo, setRepo] = useState<string>('');
    const [isRepoExisting, setIsRepoExisting] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setIsRepoExisting(undefined);
    }, [username, repo]);

    const backgroundColor = useCallback(() => {
        switch (isRepoExisting && connectionStatus) {
            case undefined:
                return colors.WHITE;
            case true:
                return colors.GREEN;
            case false:
                return colors.RED;
            default:
                return colors.WHITE;
        }
    }, [isRepoExisting, connectionStatus]);

    const check = async () => {
        try {
            const existing = await checkExistingRepo(username, repo);
            setConnectionStatus(true);
            setIsRepoExisting(existing);
        } catch {
            setConnectionStatus(false);
            setIsRepoExisting(false);
        }
    };

    const send = async () => {
        try {
            const response = await sendMessage(username, repo);
            setConnectionStatus(true);
            if (response) {
                pushToDoneView(navigation);
            }
        } catch {
            setConnectionStatus(false);
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
        if (connectionStatus === false) {
            return (
                <Text style={styles.errorText}>
                    Check your <Text style={{ fontFamily: font.primary.bold }}>internet connection</Text>
                </Text>
            );
        } else if (isRepoExisting === false && connectionStatus) {
            return (
                <Text style={styles.errorText}>
                    Check your <Text style={{ fontFamily: font.primary.bold }}>username</Text> or your <Text style={{ fontFamily: font.primary.bold }}>repository </Text>name
                </Text>
            );
        } else {
            return <></>;
        }
    }, [isRepoExisting, connectionStatus]);

    return (
        <View style={[styles.mainContainer, { backgroundColor: backgroundColor() }]}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.titleLabel}>Set the repository address</Text>
                </View>
                <View style={styles.middleView}>
                    <Text style={styles.formLabel}>github.com</Text>
                    <TouchableOpacity onPress={() => pushToInsertUser(navigation, username, setUsername)}>
                        <Text style={styles.formLabel} numberOfLines={1}>
                            /<Text style={{ color: colors.GREY }}>{!!username ? username : 'user'}</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pushToInsertRepo(navigation, repo, setRepo)}>
                        <Text style={styles.formLabel} numberOfLines={1}>
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
    titleLabel: {
        fontFamily: font.primary.regular,
        fontSize: 22,
        color: colors.BLACK,
    },
    middleView: {
        width: '100%',
        marginTop: 40,
    },
    formLabel: {
        fontFamily: font.primary.regular,
        fontSize: 36,
        color: colors.BLACK,
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
        fontFamily: font.primary.bold,
        fontSize: 22,
        color: colors.BLACK,
    },
    errorText: {
        fontFamily: font.primary.regular,
        fontSize: 24,
        marginTop: 16,
        color: colors.BLACK,
    },
});
