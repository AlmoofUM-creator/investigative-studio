# Contributing to Investigative Studio

We welcome contributions from journalists, developers, researchers, and data analysts!

## Code of Conduct

- **Integrity First**: All contributions must maintain data integrity and accuracy
- **Transparency**: Code should be clear, auditable, and well-documented
- **Ethics**: Respect privacy and legal guidelines
- **Collaboration**: Work constructively with the community

## Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Write tests for new functionality
5. Commit with clear messages
6. Push to your fork
7. Submit a Pull Request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/AlmoofUM-creator/investigative-studio.git
cd investigative-studio

# Set up environment
python -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt

# Set up Node environment
cd frontend
npm install
```

## Code Standards

### Python
- Follow PEP 8 style guide
- Use type hints
- Write docstrings for all functions
- Keep functions focused and testable

### JavaScript/React
- Use functional components
- Follow airbnb style guide
- Add PropTypes or TypeScript
- Keep components focused

### Documentation
- Update README.md for major changes
- Document new agents in docs/agents.md
- Add examples to docstrings
- Keep docs in sync with code

## Testing

```bash
# Python tests
python -m pytest backend/tests/

# Frontend tests
cd frontend && npm test
```

All new code should include tests.

## License

By contributing, you agree that your contributions will be licensed under the MIT License with ethical use provisions.

Thank you for helping us build better tools for investigative journalism! 🙏
