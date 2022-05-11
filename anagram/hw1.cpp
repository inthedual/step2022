//hw1: create new dict and conduct bin search
#include <bits/stdc++.h>
#include <regex>
using namespace std;

vector<string> bin_search(string word, vector<pair<string, string> > dict) {
  vector<string> vec;
  int n = dict.size();
  int l = 0;
  int r = n;
  int m;
  while(l < r) {
    m = (r+l)/2;
    //anagram at second entry of the dictionary
    if (dict[m].first == word) {
      vec.push_back(dict[m].second);
      break;
    }
    else if (word < dict[m].first) r = m;
    else l = m+1;
  }
  //if there are multiple anagrams
  int m_forward = m+1;
  int m_backward = m-1;
  while(dict[m_forward].first == word) {
    vec.push_back(dict[m_forward].second);
    m_forward++;
  }
  while(dict[m_backward].first == word) {
    vec.push_back(dict[m_backward].second);
    m_backward--;
  }
  return vec;
}

int main() {
  string word;
  getline(cin, word);
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
  //sort target word
  sort(word.begin(), word.end());

  ifstream dictionary ("words.txt");
  string line;
  //new dict: sorted word, original word
  vector<pair<string, string> > sorted_dict;
  if (dictionary.is_open()) {
    while (getline(dictionary, line)) {
      string orig_line = line;
      sort(line.begin(), line.end());
      sorted_dict.push_back(make_pair(line, orig_line));
    }
  }
  sort(sorted_dict.begin(), sorted_dict.end());
 
  vector<string> anagram = bin_search(word, sorted_dict);
  if (anagram.empty()) {
    cout << "anagram not found!" << endl;
    return 0;
  }
  
  for (int i = 0; i < anagram.size(); i++) {
    cout << anagram[i] << endl;
  }
}