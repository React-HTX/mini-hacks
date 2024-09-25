import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, Platform } from 'react-native';
import { fetchTrendingMovies, fetchUpcomingMovies, fetchTopRatedMovies } from '@/utils/request';
import MovieList from '../../components/MovieList';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { Link } from 'expo-router';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MoviesScreen() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <SafeAreaView style={[styles.safeArea, Platform.OS === 'web' && styles.safeAreaWeb]}>

      <View style={[styles.headerContainer, Platform.OS === 'web' && styles.headerContainerWeb]}>
        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="black" />
        <Text style={styles.title}>
          <Text style={styles.brandLetter}>M</Text>ovies
        </Text>
        <TouchableOpacity>
          <Link replace href={'/SearchScreen'}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="black" />
          </Link>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={Platform.OS === 'web' && styles.scrollViewWeb}>
        <View style={[styles.container, Platform.OS === 'web' && styles.containerWeb]}>
          <MovieList title="Trending Movies" data={trending} loading={loading} />
          <MovieList title="Upcoming Movies" data={upcoming} loading={loading} />
          <MovieList title="Top Rated Movies" data={topRated} loading={loading} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  safeAreaWeb: {
    paddingHorizontal: 50
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingTop: 50,
  },
  headerContainerWeb: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  brandLetter: {
    color: '#E50914',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
  },
  containerWeb: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  scrollViewWeb: {
    paddingBottom: 50,
  },
});