import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [genre, setGenre] = useState('');
  const [bpm, setBpm] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Simulação da IA do AUZU gerando resposta
  const generateIdea = () => {
    if (!genre) {
      setSuggestion("Por favor, informe um gênero para o AUZU analisar.");
      return;
    }

    const tips = [
      `AUZU sugere para ${genre} (${bpm || '120'} BPM): Use compressão sidechain agressiva no baixo e adicione reverb curto nos claps.`,
      `Análise AUZU: Tente criar uma polirritmia 3/4 na melodia principal para dar movimento ao ${genre}.`,
      `Dica de Mixagem: Corte as frequências abaixo de 150Hz em tudo, exceto no Kick e no Sub-bass.`,
      `Ideia Criativa: Adicione um sample vocal processado com muito delay e distorção harmônica.`,
    ];

    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setSuggestion(randomTip);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Título Atualizado */}
        <Text style={styles.header}>AUZU Sound IA 🎛️</Text>
        <Text style={styles.subtitle}>Seu assistente de produção musical v2.0</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Gênero Musical</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Techno, Trap, House..." 
            placeholderTextColor="#666"
            value={genre}
            onChangeText={setGenre}
          />

          <Text style={styles.label}>BPM</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: 128" 
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={bpm}
            onChangeText={setBpm}
          />

          <TouchableOpacity style={styles.button} onPress={generateIdea}>
            <Text style={styles.buttonText}>PROCESSAR AUDIO</Text>
          </TouchableOpacity>
        </View>

        {suggestion !== '' && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>AUZU Responde:</Text>
            <Text style={styles.resultText}>{suggestion}</Text>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d', // Fundo bem escuro
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ff9d', // Verde Neon da marca AUZU
    marginTop: 30,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  card: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#333',
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#252525',
    color: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#00ff9d', // Botão Verde Neon
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#00ff9d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10, // Efeito de brilho (Glow)
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#00ff9d',
    width: '100%',
  },
  resultTitle: {
    color: '#00ff9d',
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  resultText: {
    color: '#ddd',
    fontSize: 15,
    lineHeight: 22,
  },

});
