import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarContent, AvatarFallback } from "./ui/avatar";
import { 
  MessageSquare, 
  Users, 
  ThumbsUp, 
  MessageCircle, 
  Plus,
  Search,
  Pin,
  Heart,
  Share,
  Flag
} from "lucide-react";

const forumCategories = [
  {
    id: "general",
    name: "General Discussion",
    description: "Community updates and general topics",
    posts: 156,
    members: 89,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "maintenance", 
    name: "Maintenance & Issues",
    description: "Discuss society maintenance and repairs",
    posts: 43,
    members: 67,
    color: "bg-orange-100 text-orange-800"
  },
  {
    id: "events",
    name: "Events & Activities", 
    description: "Organize and discuss community events",
    posts: 28,
    members: 52,
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: "marketplace",
    name: "Marketplace",
    description: "Buy, sell, or exchange items within community",
    posts: 34,
    members: 41,
    color: "bg-green-100 text-green-800"
  }
];

const recentPosts = [
  {
    id: "P001",
    title: "Anyone interested in morning walking group?",
    content: "Looking to start a morning walking group for health enthusiasts. We can meet at the park daily at 6 AM. Who's interested?",
    author: "Priya Sharma",
    authorInitials: "PS",
    category: "Events & Activities",
    timestamp: "2 hours ago",
    likes: 12,
    comments: 8,
    pinned: true,
    tags: ["health", "walking", "morning"]
  },
  {
    id: "P002",
    title: "Selling washing machine in good condition",
    content: "Moving out next month. Selling a 6kg semi-automatic washing machine. 3 years old, excellent condition. Price negotiable.",
    author: "Amit Kumar",
    authorInitials: "AK", 
    category: "Marketplace",
    timestamp: "4 hours ago",
    likes: 5,
    comments: 12,
    pinned: false,
    tags: ["selling", "appliances"]
  },
  {
    id: "P003",
    title: "Water pressure issue in Tower B",
    content: "Has anyone else noticed low water pressure in Tower B, especially on higher floors? Should we raise this with the management?",
    author: "Neha Gupta",
    authorInitials: "NG",
    category: "Maintenance & Issues", 
    timestamp: "6 hours ago",
    likes: 18,
    comments: 15,
    pinned: false,
    tags: ["water", "maintenance", "tower-b"]
  },
  {
    id: "P004",
    title: "Ganesh Chaturthi celebration was amazing!",
    content: "Thank you to everyone who participated in yesterday's celebration. The food was delicious and the decorations were beautiful!",
    author: "Rajesh Mehta",
    authorInitials: "RM",
    category: "General Discussion",
    timestamp: "1 day ago", 
    likes: 25,
    comments: 7,
    pinned: false,
    tags: ["celebration", "thanks", "ganesh-chaturthi"]
  }
];

const trendingTopics = [
  { tag: "parking-issues", count: 23 },
  { tag: "dussehra-planning", count: 18 },
  { tag: "security-update", count: 15 },
  { tag: "gardening", count: 12 },
  { tag: "childrens-activities", count: 9 }
];

interface CommunityScreenProps {
  onBack: () => void;
}

export function CommunityScreen({ onBack }: CommunityScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <h1 className="text-xl">Community Forum</h1>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-1" />
            New Post
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search discussions..." 
            className="pl-9 bg-input-background"
          />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Forum Categories */}
        <div>
          <h2 className="text-lg mb-3">Forum Categories</h2>
          <div className="grid grid-cols-1 gap-3">
            {forumCategories.map((category) => (
              <Card key={category.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground">
                          {category.posts} posts
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {category.members} members
                        </span>
                      </div>
                    </div>
                    <Badge className={category.color}>
                      Active
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div>
          <h2 className="text-lg mb-3">Trending Topics</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <Badge 
                    key={topic.tag} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-accent"
                  >
                    #{topic.tag} ({topic.count})
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts */}
        <div>
          <h2 className="text-lg mb-3">Recent Discussions</h2>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Card key={post.id} className={`${post.pinned ? 'border-l-4 border-l-yellow-500' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {post.authorInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {post.pinned && <Pin className="h-3 w-3 text-yellow-600" />}
                          <CardTitle className="text-base">{post.title}</CardTitle>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          by {post.author} • {post.timestamp}
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.content}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span className="text-sm">{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="h-auto p-1">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Post */}
        <div>
          <h2 className="text-lg mb-3">Start a Discussion</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What's on your mind?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input 
                placeholder="Discussion title..."
                className="bg-input-background"
              />
              <select className="w-full p-2 border border-border rounded-md bg-input-background">
                <option>Select Category</option>
                <option>General Discussion</option>
                <option>Maintenance & Issues</option>
                <option>Events & Activities</option>
                <option>Marketplace</option>
              </select>
              <Textarea 
                placeholder="Share your thoughts with the community..."
                className="bg-input-background"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  Posts are moderated by community admins
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Post Discussion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Guidelines */}
        <div>
          <h2 className="text-lg mb-3">Community Guidelines</h2>
          <Card>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>Be respectful and courteous to all community members</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>Keep discussions relevant to the community</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>No spam, advertising, or inappropriate content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <span>Report any violations to community moderators</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom navigation placeholder */}
      <div className="h-20"></div>
    </div>
  );
}