import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, Tab, List } from 'react-native-paper';

const PizzaMenu = () => {
  const [index, wsetIndex] = useState(0);

  const pizzas = [
    { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and fresh basil' },
    { id: 2, name: 'Pepperoni', description: 'Pepperoni, tomato sauce, and mozzarella' },
    { id: 3, name: 'BBQ Chicken', description: 'BBQ sauce, chicken, onions, and cilantro' }
  ];

  const renderPizzaList = () => (
    <ScrollView>
      {pizzas.map((pizza) => (
        <List.Item
          key={pizza.id}
          title={pizza.name}
          description={pizza.description}
          left={props => <List.Icon {...props} icon="pizza" />}
        />
      ))}
    </ScrollView>
  );

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="Pizza Menu" />
      </Appbar.Header>
      <Tab.Navigator
        navigationState={{ index, routes: [{ key: 'first', title: 'Menu' }] }}
        onIndexChange={setIndex}
        renderScene={({ route }) => {
          switch (route.key) {
            case 'first':
              return renderPizzaList();
            default:
              return null;
          }
        }}
      >
        <Tab.Screen name="Menu" component={renderPizzaList} />
      </Tab.Navigator>
    </PaperProvider>
  );
};

export default PizzaMenu;
