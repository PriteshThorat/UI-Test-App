import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        }
    ]

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView 
                scrollEnabled={false}
                style={styles.container} >
                    {
                        contacts.map(({ uid, name, status, imageUrl }) => (
                            <View 
                                style={styles.userCard}
                                key={uid} >
                                    <View style={styles.imgSide}>
                                        <Image 
                                            source={{
                                                uri: imageUrl
                                            }} 
                                            style={styles.userImage} />
                                    </View>
                                    <View style={styles.detailsSide}>
                                        <Text style={styles.userName}>{name}</Text>
                                        <Text style={styles.userStatus}>{status}</Text>
                                    </View>
                            </View>
                        ))
                    }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        width: 350,
        height: 330,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 6
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15,
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        padding: 8,
        borderColor: '#FFFFFF',
        margin: 3,
        borderRadius: 12
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 4
    },
    userStatus: {},
    imgSide: {},
    detailsSide: {}
})

export default ContactList