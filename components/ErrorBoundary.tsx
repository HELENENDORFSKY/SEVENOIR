import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

// React.Component without @types/react installed needs a small workaround for TypeScript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ErrorBoundaryImpl extends (React.Component as any) {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#686a6c',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              SEVENOIR
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
              Something went wrong loading the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                backgroundColor: '#fff',
                color: '#686a6c',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <ErrorBoundaryImpl>{children}</ErrorBoundaryImpl>;
}
