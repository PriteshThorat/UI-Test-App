import { Image, Linking, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"

const ActionCard = () => {
    const openWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>TypeScript is JavaScript with syntax for types.</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.hbyp2uiLuMV4ZD9dDK8jaQHaEo%3Fr%3D0%26pid%3DApi&f=1&ipt=4047365a3041bc5a4fb3ea56d90bcb47232656de017fc1bce99e6797f7430f20&ipo=images'
                    }} 
                    style={styles.cardImage} />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3}>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={() => openWebsite('https://www.typescriptlang.org/')}>
                            <Text style={styles.socialLinks} >Read more...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openWebsite('https://github.com/PriteshThorat')}>
                            <Text style={styles.socialLinks} >Follow me</Text>
                        </TouchableOpacity>
                    </View>
            </View>
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
    card: {
        width: 350,
        height: 270,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 6,
    },
    elevatedCard: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 600
    },
    cardImage: {
        height: 100
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#FFFFFF',
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        borderRadius: 6
    }
})

export default ActionCard