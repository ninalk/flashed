import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import Slide from './Slide';

const Carousel = ({ cards, navigation }) => {
    // configure active index
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;

    const onScroll = useCallback((e) => {
        // use width and x offset since carousel is horizontal
        const slideSize = e.nativeEvent.layoutMeasurement.width;
        const index = e.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);
        // Prevent one pixel triggering setIndex in the middle
        // of the transition. With this we have to scroll a bit
        // more to trigger the index change.
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2
    }

    // use the index
    // useEffect(() => {
    //     console.warn(index);
    // }, [index]);

    return (
        <FlatList 
            data={cards}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => {
                return <Slide data={item} index={index} cards={cards} navigation={navigation}/>
            }}
            keyExtractor={(item) => item._id}
            pagingEnabled={true}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
        />
    )
}


export default Carousel;