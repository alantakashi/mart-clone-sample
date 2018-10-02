import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from '../../helpers';

const styles = StyleSheet.create({
  productHeaderInfo: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  productHeaderTitle: {
    fontSize: 18
  },
  productHeaderThumbnailWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16
  },
  productHeaderThumbnail: {
    width: 50,
    height: 50
  },
  productContentMedia: {
    flex: 1,
    width: null,
    height: 300
  }
});

const ProductDetail = ({ product }) => {
  const { title, artist, thumbnail_image, image, url } = product;
  const { productHeaderInfo, productHeaderTitle, productHeaderThumbnailWrap, productHeaderThumbnail, productContentMedia } = styles;

  return (
    <Card>
      <CardSection>
        <View style={ productHeaderThumbnailWrap }>
          <Image style={ productHeaderThumbnail } source={{ uri: thumbnail_image }} />
        </View>
        <View style={ productHeaderInfo }>
          <Text style={ productHeaderTitle }>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={ productContentMedia } source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
}

export default ProductDetail;
