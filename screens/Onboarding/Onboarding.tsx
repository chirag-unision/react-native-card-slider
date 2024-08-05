import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const data = [
  {
    id: 1,
    image: `https://image1.masterfile.com/getImage/NjExOC0wNzM1MTE5OGVuLjAwMDAwMDAw=ABBLkM/6118-07351198en_Masterfile.jpg`,
    title: `Connect With Your Neighbourhood!`,
    subtitle: `Discover your locality....`,
  },
  {
    id: 2,
    image: `https://media.istockphoto.com/id/1278978403/photo/teenager-friends-sitting-together-and-laughing.jpg?s=612x612&w=0&k=20&c=YRk7DDiyU5PeHeQ77fJw9kXMAN4qbo5HIVrcJ5A1WN0=`,
    title: `Find New People!`,
    subtitle: `Discover your locality....`,
  },
  {
    id: 3,
    image: `https://static5.depositphotos.com/1037987/476/i/450/depositphotos_4761028-stock-photo-group-young-friends-drinking-laughing.jpg`,
    title: `Know Your Local Society!`,
    subtitle: `Discover your locality....`,
  },
];


const SliderCard= ({ data }:any) => {

    return (
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: data.image }}
          style={{ width: 300, height: 500, borderRadius: 40 }}
        />
        <Text style={{ fontSize: 28, color: '#000', padding: 30, fontWeight: '600' }}>{data.title}</Text>
        <Text style={{ fontSize: 20, color: '#000', paddingHorizontal: 30 }}>{data.subtitle}</Text>
      </View>
    );
  }

const Onboarding = () => {
    const slider= useRef(null);
    const [pos, setPos]= useState(0);

  return (
    <>
        <FlatList
            data={data}
            ref={slider}
            renderItem={({ item }) => {
                return <SliderCard data={item} />;
            }}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
        />
        <View style={styles.dots}>
            {data.map((_, i) => {
                return <View style={{borderRadius: 10, borderWidth: 1, width: 10, height: 10, margin: 5, backgroundColor: pos==i?'blue':'white'}}></View>
            })}
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=> {
                slider.current.scrollToIndex({ index: pos-1, animated: true });
                setPos(pos-1);
            }}><Text style={styles.buttontext}>{'<< Back'}</Text></TouchableOpacity>

            <TouchableOpacity onPress={()=> {
                slider.current.scrollToIndex({ index: pos+1, animated: true });
                setPos(pos+1);
            }}><Text style={styles.buttontext}>{'Next >>'}</Text></TouchableOpacity>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttontext: {
        fontSize: 25,
        padding: 20,
        color: '#000'
    },
    cardContainer: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 60
    },
    dots: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'center'
    }
});

export default Onboarding;
