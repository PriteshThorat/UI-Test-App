import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.Gtymze47UVLf8k5XIaEUSwHaDt%3Fpid%3DApi&f=1&ipt=9e78fe00e627377bf42d8a0bb8c16505697ab28a17a736c4d2fa3694dda630fd'
                    }}
                    style={styles.cardImage}
                 />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sinhagad Fort Pune</Text>
                    <Text style={styles.cardLabel}>The Perfect Blend of Adventure and Culture Near Pune!</Text>
                    <ScrollView>
                        <Text style={styles.cardDescription}>Sinhagad (also known as the Lion's Fort) is an ancient hill fortress located at around 28 kilometres southwest of Pune, India. Previously known as Kondhana, the fort has been the site of many battles, most notably the Battle of Sinhagad in 1670.This is the highest peaks of Pune.</Text>
                    </ScrollView>
                    <Text>Pune District, Maharashtra, India</Text>
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
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 6
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 26
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    }
})

export default FancyCard