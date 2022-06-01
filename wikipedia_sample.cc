#include <fstream>
#include <iostream>
#include <map>
#include <set>
#include <sstream>
#include <string>
#include <vector>
#include <queue>
#include <stack>

std::map<std::string, std::string> pages;
std::map<std::string, std::set<std::string> > links;


std::map<std::string, bool> seen_dfs;
std::map<std::string, std::string> parents_dfs;
std::vector<std::string> path_dfs; 
std::stack<std::string> to_check_dfs;

std::string record_path(std::vector<std::string> &path, std::map<std::string, std::string> &parents, 
  std::string start, std::string goal){
  if(parents[goal] == start) {
    return pages[start];
  }

  path.insert(path.begin(), pages[parents[goal]]);

  return record_path(path, parents, start, parents[goal]);
}

void dfs(std::string start, std::string goal) {
  seen_dfs[start] = true;
  to_check_dfs.push(start);

  while (!to_check_dfs.empty()) {
    std::string parent = to_check_dfs.top(); 
    to_check_dfs.pop();

    for (auto next : links[parent]) {
      if (next == goal) {
        path_dfs.push_back(pages[next]);
        parents_dfs[next] = parent;
        return;
      }
      if (seen_dfs[next]) continue;
      parents_dfs[next] = parent;
      to_check_dfs.push(next);
      seen_dfs[next] = true;
    }
  }

}

std::map<std::string, bool> seen_bfs;
std::map<std::string, std::string> parents_bfs;
std::vector<std::string> path_bfs; 
std::queue<std::string> to_check_bfs;
void bfs(std::string start, std::string goal) {
  seen_bfs[start] = true;
  to_check_bfs.push(start);

  while (!to_check_bfs.empty()) {
    std::string parent = to_check_bfs.front(); 
    to_check_bfs.pop();

    for (auto next : links[parent]) {
      if (next == goal) {
        path_bfs.push_back(pages[next]);
        parents_bfs[next] = parent;
        return;
      }
      if (seen_bfs[next]) continue;
      parents_bfs[next] = parent;
      to_check_bfs.push(next);
      seen_bfs[next] = true;
    }
  }

}

void input() {
  {
    std::ifstream file("data/pages_small.txt");
    std::string data;
    while (std::getline(file, data)) {
      auto index = data.find('\t');
      auto id = data.substr(0, index);
      auto title = data.substr(index + 1, data.size() - id.size() - 1);
      pages[id] = title;
    }
  }

  {
    std::ifstream file("data/links_small.txt");
    std::string data;
    while (std::getline(file, data)) {
      auto index = data.find('\t');
      auto from = data.substr(0, index);
      auto to = data.substr(index + 1, data.size() - from.size() - 1);
      links[from].insert(to);
    }
  }
}
int main() {
  input();
  
  std::string start;
  std::string goal;
  std::cout << "Start: ";
  std::cin >> start;
  std::cout << "Goal: ";
  std::cin >> goal;
  for (const auto& page : pages) {
    seen_dfs.insert(std::make_pair(page.first, false));
    seen_bfs.insert(std::make_pair(page.first, false));
    if (page.second == start) {
      //std::cout << page.second << " " << page.first << std::endl;
      start = page.first;
    }
    if (page.second == goal) {
      //std::cout << page.second << " " << page.first << std::endl;
      goal = page.first;
    }
  }

  dfs(start, goal);
  record_path(path_dfs, parents_dfs, start, goal);
  if (path_dfs.empty()) {
    std::cout << "Path not found!" << std::endl;
    return 0;
  }
  std::cout << "Path found in DFS: " << std::endl;
  for (auto id : path_dfs) {
    std::cout << id << std::endl;
  } 

  bfs(start, goal);
  record_path(path_bfs, parents_bfs, start, goal);
  if (path_bfs.empty()) {
    std::cout << "Path not found!" << std::endl;
    return 0;
  }
  std::cout << "Path found in BFS: " << std::endl;
  for (auto id : path_bfs) {
    std::cout << id << std::endl;
  }    
  return 0;
}
