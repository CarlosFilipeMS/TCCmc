import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

type ProductCardProps = {
  name: string;
  resume: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, resume }) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.resume}>{resume}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4d4d4d',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    height: 150,
  },
  content: {
    padding: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resume: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductCard;
