import { StackNavigationProp } from '@react-navigation/stack';

export function pushToInsertUser(navigation: StackNavigationProp<any>, username: string, setUsername: any) {
    navigation.navigate('InsertUserView', { username, setUsername });
}

export function pushToInsertRepo(navigation: StackNavigationProp<any>, repo: string, setRepo: any) {
    navigation.navigate('InsertRepoView', { repo, setRepo });
}

export function pushToDoneView(navigation: StackNavigationProp<any>) {
    navigation.navigate('AllDoneView');
}

export function goBackToMainView(navigation: StackNavigationProp<any>, username: string, repo: string) {
    navigation.navigate('MainView', { username, repo });
}
