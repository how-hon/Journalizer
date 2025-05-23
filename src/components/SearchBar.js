import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { searchStyles } from '../styles/componentStyle';

export default function SearchBar({ style, onSearch }){
    const iconSize = style?.searchIcon?.size || searchStyles.searchIcon.size;  // Cannot set in stylesheet and pass in, so set here
    return (
      <TouchableOpacity onPress={onSearch} style={[searchStyles.searchContainer, style?.searchBorder]}>
        <View style={[searchStyles.searchBorder, style?.searchContainer]}>
          <Ionicons name="search-outline" size={iconSize} style={[searchStyles.searchIcon, style?.searchIcon]} />
            <Text style={[searchStyles.searchText, style?.searchText]}>Enter Search Here</Text>
        </View>
      </TouchableOpacity>
    );
}