export const skillColorOnLevel = (level: string): { topSpan: string, innerSpan: string } => {
    switch (level.toLowerCase()) {
        case 'beginner':
            return {
                topSpan: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
                innerSpan: 'bg-yellow-400'
            }
        case 'intermediate':
            return {
                topSpan: 'bg-green-500/20 text-green-300 border border-green-500/30',
                innerSpan: 'bg-green-400'
            }
        case 'advanced':
            return {
                topSpan: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
                innerSpan: 'bg-blue-400'
            }
        case 'expert':
            return {
                topSpan: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
                innerSpan: 'bg-purple-400'
            }
        case 'proficient':
            return {
                topSpan: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
                innerSpan: 'bg-purple-400'
            }
        default:
            return {
                topSpan: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
                innerSpan: 'bg-gray-400'
            }
    }
}