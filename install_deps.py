import subprocess
import sys

def run_install():
    print("Starting npm install process...")
    try:
        # Run npm install with all required dependencies
        cmd = [
            "npm.cmd", "install", 
            "next", "react", "react-dom", 
            "framer-motion", "@tsparticles/react", "@tsparticles/engine", "@tsparticles/slim", 
            "clsx", "tailwind-merge", "lucide-react"
        ]
        
        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True
        )
        
        # Stream output in real-time to avoid deadlock, and check for None to satisfy type checkers
        stdout = process.stdout
        if stdout is not None:
            for line in stdout:
                print(line.strip())
                
        # Wait for process to complete
        process.wait()
                
        # Check for errors
        if process.returncode != 0:
            print(f"Error occurred (Code {process.returncode}):")
        else:
            print("Installation completed successfully!")
            
    except Exception as e:
        print(f"Exception during installation: {e}")

if __name__ == "__main__":
    run_install()
