import React from 'react'
import { BookOpen, Video, TrendingUp, Star, Sparkles } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HomeProps {
  onViewChange: (view: 'vocabulary' | 'videos' | 'admin') => void
  vocabularyCount: number
  videoCount: number
}

export default function Home({ onViewChange, vocabularyCount, videoCount }: HomeProps) {
  const { user, isAdmin } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Compact Hero Section */}
        <div className="text-center mb-6 sm:mb-12">
          <div className="mb-3 sm:mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full mb-2 sm:mb-4 shadow-lg">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-2 sm:mb-4 lg:mb-6">
            Welcome back, <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">{user?.username}</span>! 🎉
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            {isAdmin ? (
              <>Your admin powers are ready! 👑 Manage content and help everyone learn volleyball! 🏐</>
            ) : (
              <>Your friendly volleyball learning companion! 🌟 Explore volleyball vocabulary and watch training drills! 🏐</>
            )}
          </p>
          <div className="mt-3 sm:mt-6 lg:mt-8 flex justify-center">
            <div className="flex items-center bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 shadow-lg">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-500 mr-1 sm:mr-2" />
              <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">
                {isAdmin ? 'Admin Access 👑' : 'Guest Explorer 🌟'}
              </span>
            </div>
          </div>
        </div>

        {/* Compact Content Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-12 lg:mb-16">
          {/* Volleyball Vocab Card - Mobile Optimized */}
          <div 
            onClick={() => onViewChange('vocabulary')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
              <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">{vocabularyCount}</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">🏐 Volleyball Vocab</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4">Master volleyball terms that will make you shine on the court! ✨</p>
            <div className="flex items-center text-orange-600 font-medium">
              <span className="text-xs sm:text-sm">Click to explore vocabulary →</span>
            </div>
          </div>

          {/* Training Drills Card - Mobile Optimized */}
          <div 
            onClick={() => onViewChange('videos')}
            className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
              <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                <Video className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{videoCount}</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">🏐 Training Drills</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4">Watch, learn, and improve your volleyball skills! 🚀</p>
            <div className="flex items-center text-pink-600 font-medium">
              <span className="text-xs sm:text-sm">Click to watch drills →</span>
            </div>
          </div>
        </div>

        {/* Compact Encouraging Message */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-yellow-200">
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              {isAdmin ? '👑 Ready to Make a Difference?' : '🏐 Ready to Start Your Volleyball Journey?'}
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4 lg:mb-6 px-2">
              {isAdmin ? 
                'Your admin powers help create amazing volleyball learning experiences for everyone! 🚀' :
                'Every volleyball champion was once a beginner. Every pro was once an amateur. Every star was once unknown! 💪'
              }
            </p>
            <div className="flex justify-center space-x-2 sm:space-x-3 lg:space-x-4">
              <span className="text-lg sm:text-xl lg:text-2xl">🏐</span>
              <span className="text-lg sm:text-xl lg:text-2xl">🚀</span>
              <span className="text-lg sm:text-xl lg:text-2xl">⭐</span>
              <span className="text-lg sm:text-xl lg:text-2xl">🏆</span>
              <span className="text-lg sm:text-xl lg:text-2xl">💝</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}