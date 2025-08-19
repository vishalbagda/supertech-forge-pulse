import { useState, useRef } from 'react'
import { Plus, Settings, Mic, Moon, Sun, Upload, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTheme } from '@/hooks/useTheme'
import { Card } from '@/components/ui/card'

const WaterPollutionReport = () => {
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { theme, toggleTheme } = useTheme()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (description.trim() || selectedFile) {
      // Handle form submission
      console.log('Submitting report:', { description, file: selectedFile })
    }
  }

  const clearImage = () => {
    setSelectedFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative transition-colors duration-300">
      {/* Theme Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Sun className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>

      {/* Header */}
      <div className="text-center mb-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Give Water a Voice with GenAI
        </h1>
        <p className="text-lg text-muted-foreground">
          Report water pollution by uploading an image and describing the issue. 
          Help us protect our water resources with AI-powered analysis.
        </p>
      </div>

      {/* Main Input Container */}
      <Card className="w-full max-w-2xl p-6 bg-card border border-border shadow-lg">
        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4 relative">
            <img
              src={imagePreview}
              alt="Selected pollution evidence"
              className="w-full h-48 object-cover rounded-lg border border-border"
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={clearImage}
              className="absolute top-2 right-2"
            >
              Remove
            </Button>
          </div>
        )}

        {/* Input Box */}
        <div className="relative bg-input rounded-lg border border-border focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all">
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the water pollution issue you've observed..."
            className="min-h-[120px] border-0 bg-transparent resize-none focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
          />
          
          {/* Icon Buttons Row */}
          <div className="flex items-center justify-between p-3 border-t border-border">
            <div className="flex items-center gap-2">
              {/* File Upload Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="text-muted-foreground hover:text-primary hover:bg-secondary"
              >
                <Plus className="h-4 w-4 mr-1" />
                Upload Image
              </Button>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Tools Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-secondary"
              >
                <Settings className="h-4 w-4" />
              </Button>

              {/* Voice Input Button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-secondary"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!description.trim() && !selectedFile}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4 mr-1" />
              Submit Report
            </Button>
          </div>
        </div>

        {/* File Status */}
        {selectedFile && (
          <div className="mt-4 p-3 bg-secondary rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <Upload className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">
                {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
          </div>
        )}
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Your reports help create a cleaner, safer water environment for everyone.
        </p>
      </div>
    </div>
  )
}

export default WaterPollutionReport