//hw2: check if the word in the dictionary is a subset of the word
#include <bits/stdc++.h>
#include <regex>
#include <array>
using namespace std;

array<int, 26> count_freq(string str) {
  array<int, 26> arr = {0};
  for (int i = 0; i < str.length(); i++) {
    arr[int(str[i] - 'a')]++;
  }
  return arr;
}

string best_anagram(vector<pair <array<int, 26>, string> > &sorted_dict, 
  array<int, 26> &word_freq, array<int, 26> &score_list) {
  //check if anagram
  int max_score = 0;
  string max_str = "";
  for (int i = 0; i < sorted_dict.size(); i++) {
    int score = 0;
    for (int j = 0; j < 26; j++) {
      if (sorted_dict[i].first[j] <= word_freq[j]) {
        score += sorted_dict[i].first[j] * score_list[j];
      }
      else {
        score = 0;
        break;
      }
    }
    if (score > max_score) {
      max_score = score;
      max_str = sorted_dict[i].second;
    }
  }
  return max_str;
}

int main() {
  array<int, 26> score_list = {1, 3, 2, 2, 1, 3, 3, 1, 1, 4, 4, 2, 2, 1, 1, 3, 4, 1, 1, 1, 2, 3, 3, 4, 3, 4};
  string word;
  ifstream wordlist ("small.txt");
  ofstream answer ("small_answer.txt");
  ifstream dictionary ("words.txt");

  string line;
  //sorted_dict: (freq for a, freq for b, ...), original word in dict
  vector<pair <array<int, 26>, string> > sorted_dict;
  if (dictionary.is_open()) {
    while (getline(dictionary, line)) {
      array<int, 26> freq = count_freq(line);
      sorted_dict.push_back(make_pair(freq, line));
    }
  }
  
  if (wordlist.is_open()) {
    while (getline (wordlist, word) ) {
      //if entry is empty
      if (word.empty()) {
        cout << "Please enter a word" << endl;
        return -1;
      }
      //if entry is not all alphabets
      if (!regex_match(word, regex("^[A-Za-z]+$"))) {
        cout << "This entry is not valid" << endl;
        return -1;
      }
      //convert to lowercase
      for (int i = 0; i < word.length(); i++) {
        word[i] = tolower(word[i]);
      }
      //frequency of word
      array<int, 26> word_freq = count_freq(word);
      int max_score = 0;
      string max_str = "";
      if (answer.is_open()) {
        string max_str = best_anagram(sorted_dict, word_freq, score_list);
        answer << max_str << endl;
      }
      else {
        cout << "Unable to open file" << endl;
        return -1;
      }
    }
  }
  else {
    cout << "Unable to open file" << endl;
    return -1;
  }
  
}