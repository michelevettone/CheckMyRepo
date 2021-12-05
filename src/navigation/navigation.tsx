import { StackNavigationProp } from '@react-navigation/stack';

export function pushToInsertUser(navigation: StackNavigationProp<any>, setUsername: any) {
    navigation.navigate('InsertUserView', { setUsername: setUsername });
}

export function pushToInsertRepo(navigation: StackNavigationProp<any>, setRepo: any) {
    navigation.navigate('InsertRepoView', { setRepo: setRepo });
}
