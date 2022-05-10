#include <bits/stdc++.h>
#include <regex>
using namespace std;

vector<int> bin_search(string word, vector<pair<string, int> > dict) {
  vector<int> index;
  int n = dict.size();
  int l = 0;
  int r = n;
  int m;
  while(l < r) {
    m = (r+l)/2;
    //anagram at second entry of the dictionary
    if (dict[m].first == word) {
      index.push_back(dict[m].second);
      break;
    }
    else if (word < dict[m].first) r = m;
    else l = m+1;
  }
  //if there are multiple anagrams
  int m_forward = m+1;
  int m_backward = m-1;
  while(dict[m_forward].first == word) {
    index.push_back(dict[m_forward].second);
    m_forward++;
  }
  while(dict[m_backward].first == word) {
    index.push_back(dict[m_backward].second);
    m_backward--;
  }
  return index;
}

int main() {
  //sort target word
  string word;
  getline(cin, word);
  //if entry is empty
  if (word.empty()) {
    cout << "Please enter a word" << endl;
    return 0;
  }
  //if entry is not all alphabets
  if (!regex_match(word, regex("^[A-Za-z]+$"))) {
    cout << "This entry is not valid" << endl;
    return 0;
  }
  //convert to lowercase
  for (int i = 0; i < word.length(); i++) {
    word[i] = tolower(word[i]);
  }
  sort(word.begin(), word.end());
  //sort dictionary
  ifstream dictionary ("words.txt");
  string line;
  vector<string> dict;
  //new dict: word, index of original dict
  vector<pair<string, int> > sorted_dict;
  int index = 0;
  if (dictionary.is_open()) {
    while (getline(dictionary, line)) {
      dict.push_back(line);
      sort(line.begin(), line.end());
      sorted_dict.push_back(make_pair(line, index));
      index++;
    }
  }
  sort(sorted_dict.begin(), sorted_dict.end());
  //index of the found anagram
  vector<int> anagram_index = bin_search(word, sorted_dict);
  if (anagram_index.empty()) {
    cout << "anagram not found!" << endl;
    return 0;
  }
  //extract word from the vector of index
  for (int i = 0; i < anagram_index.size(); i++) {
    cout << dict[anagram_index[i]] << endl;
  }
}