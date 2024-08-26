import {View, Text, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface BookData {
  title: string;
  isbn: string;
  image: string;
  author: string;
}

interface Book {
  bookData: BookData[];
  title: string;
}

const Container = styled.View`
  flex-direction: row;
  width: 250px;
  height: 220px;
  margin-right: 10px;
  border: 1px solid black;
  padding: 2px;
`;

const Hmedia: React.FC<Book> = ({bookData, title}) => {
  console.log(bookData);
  return (
    <>
      <View style={{paddingLeft: 10, marginBottom: 20}}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
      <ScrollView horizontal style={{paddingHorizontal: 20}}>
        {bookData.map(book => (
          <Container key={book.isbn}>
            <Image
              source={{uri: book.image}}
              style={{width: 150, height: 215}}
            />
            <View style={{justifyContent: 'space-between'}}>
              <Text
                style={{
                  width: 60,
                  marginLeft: 10,
                  fontSize: 15,
                  color: 'black',
                }}>
                {book.title.slice(0, 40)}
              </Text>
              <Text
                style={{
                  width: 80,
                  marginLeft: 10,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {book.author}
              </Text>
            </View>
          </Container>
        ))}
      </ScrollView>
    </>
  );
};

export default Hmedia;
