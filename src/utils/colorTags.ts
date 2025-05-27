const tagColors: Record<string, string> = {
    'power bi': 'bg-yellow-300 text-yellow-900',
    'dax': 'bg-amber-400 text-amber-900',
    'sql': 'bg-blue-300 text-blue-900',
    'python': 'bg-green-300 text-green-900',
    'pandas': 'bg-emerald-300 text-emerald-900',
    'scikit-learn': 'bg-teal-300 text-teal-900',
    'prophet': 'bg-violet-300 text-violet-900',
    'streamlit': 'bg-pink-300 text-pink-900',
    'tableau': 'bg-indigo-300 text-indigo-900',
    'excel': 'bg-lime-300 text-lime-900'
  };
  
export function getTagStyle(tag: string): string {
  console.log("Tag value:", tag)
  return tagColors[tag] || 'bg-gray-200 text-gray-800';
}