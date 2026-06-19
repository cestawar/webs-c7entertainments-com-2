// assets/content-map.js
// 站点内容分区、关键词标签与搜索过滤函数

const contentSections = [
  {
    id: 'home',
    title: '首页',
    tags: ['c7娱乐', '首页推荐', '热门活动'],
    items: [
      { name: 'c7娱乐大厅', url: 'https://webs-c7entertainments.com/lobby', description: '进入c7娱乐主大厅' },
      { name: 'c7娱乐活动', url: 'https://webs-c7entertainments.com/promotions', description: '查看c7娱乐当前优惠' }
    ]
  },
  {
    id: 'games',
    title: '游戏列表',
    tags: ['c7娱乐', '老虎机', '棋牌', '电竞'],
    items: [
      { name: 'c7娱乐老虎机', url: 'https://webs-c7entertainments.com/slots', description: 'c7娱乐热门老虎机游戏' },
      { name: 'c7娱乐棋牌', url: 'https://webs-c7entertainments.com/board', description: 'c7娱乐棋牌对战' },
      { name: 'c7娱乐电竞', url: 'https://webs-c7entertainments.com/esports', description: 'c7娱乐电竞投注' }
    ]
  },
  {
    id: 'support',
    title: '客户服务',
    tags: ['帮助', '客服', '联系'],
    items: [
      { name: 'c7娱乐帮助中心', url: 'https://webs-c7entertainments.com/help', description: 'c7娱乐常见问题解答' },
      { name: 'c7娱乐在线客服', url: 'https://webs-c7entertainments.com/support', description: '联系c7娱乐客服团队' }
    ]
  }
];

const globalTags = ['c7娱乐', '优惠', '活动', '新手上路'];

function filterContent(sections, searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return sections;

  return sections.reduce((result, section) => {
    const matchingItems = section.items.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(term);
      const descMatch = item.description.toLowerCase().includes(term);
      const urlMatch = item.url.toLowerCase().includes(term);
      const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(term));
      return nameMatch || descMatch || urlMatch || tagMatch;
    });

    if (matchingItems.length > 0) {
      result.push({
        ...section,
        items: matchingItems
      });
    }
    return result;
  }, []);
}

function getSectionsByTag(tag) {
  const lowerTag = tag.toLowerCase();
  return contentSections
    .filter(section => section.tags.some(t => t.toLowerCase() === lowerTag))
    .map(section => section.id);
}

function listAllUrls() {
  return contentSections.flatMap(section =>
    section.items.map(item => item.url)
  );
}

function getItemCount() {
  return contentSections.reduce((total, section) => total + section.items.length, 0);
}

// 示例使用（仅用于演示，不会自动执行）
// const input = 'c7娱乐';
// const filtered = filterContent(contentSections, input);
// console.log(filtered);